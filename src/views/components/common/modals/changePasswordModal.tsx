import { DefaultButton, InputPassword } from "../../ui"
import { useIntl } from "react-intl"
import { useFormik } from "formik"
import { useApiServices } from "../../../../services/api/ApiServiceContext"
import { useSpinnerStore } from "../../../../services/store"
import { toastify } from "../../../../utils/toasts"
import { ChangeUserPasswordData } from "../../../../services/api/DTO/request"
import { useUserUseCase } from "../../../../services/api/usescases"
import { BaseModalLayout } from "./baseModalLayout"
import { changePasswordSchema } from "../../../../services/forms/validations"


interface ChangePasswordModalProps {
    onClose: () => void;
}

export const ChangePasswordModal: React.FC<ChangePasswordModalProps> = (props: ChangePasswordModalProps) => {

    const { onClose } = props;
    const { formatMessage } = useIntl();
    const { userServices } = useApiServices();
    const { changeUserPassword } = useUserUseCase(userServices);
    const { showSpinner, hideSpinner } = useSpinnerStore()

    const initialValues: ChangeUserPasswordData = {
        lastPassword: "",
        newPassword: ""
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: changePasswordSchema,
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: async (values) => {
            try {
                const body: ChangeUserPasswordData = { ...values };
                showSpinner()
                await changeUserPassword(body).then(response => {
                    hideSpinner()
                    toastify('success', response.message)
                    onClose()
                })
            }
            catch (error: any) {
                hideSpinner()
                toastify('error', error.message);
            }
        }
    })
    const { values, errors, handleChange, handleSubmit } = formik;

    return (
        <BaseModalLayout onClose={onClose} header={formatMessage({ id: "change_my_password" })}>
            {/* ModalBody */}
            <div className="flex flex-col justify-start gap-3">
                <form
                    className="flex flex-col gap-3 mx-3 px-3"
                    onSubmit={handleSubmit}
                >
                    <div className="">
                        <InputPassword
                            id={"lastPassword"}
                            name={"lastPassword"}
                            placeholder={formatMessage({ id: "enter_current_password" })}
                            value={values.lastPassword}
                            onChange={handleChange}
                            label={formatMessage({ id: "current_password" })}
                            errorMessage={errors.lastPassword ? errors.lastPassword.toString() : undefined}
                        />
                    </div>
                    <div className="mb-4">
                        <InputPassword
                            id={"newPassword"}
                            name={"newPassword"}
                            placeholder={formatMessage({ id: "enter_new_password" })}
                            value={values.newPassword}
                            onChange={handleChange}
                            label={formatMessage({ id: "new_password" })}
                            errorMessage={errors.newPassword ? errors.newPassword.toString() : undefined}
                        />
                    </div>

                    <DefaultButton
                        type={"primary"}
                        text={formatMessage({ id: "change_my_password" })}
                        bgWhite={false}
                        typeForm="submit"
                        textSize={14}
                        height={42}
                        width={220}
                        radius="md"
                        className="self-center text-t7 font-bold rounded-md"
                    />
                </form>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center gap-2 w-full px-5 py-3">

            </div>
        </BaseModalLayout>
    )
}