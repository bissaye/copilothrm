import { IntlProvider } from 'react-intl';
import translations from '../../../../services/translations/locales';

export interface BaseProps {
  readonly dumm?: boolean;
  readonly locale: "en" | "fr";
  readonly children: any;
}

export const InternationalisationComponent = (props: BaseProps) => {

  const {
    locale
  } = props

  return (
    <IntlProvider
      locale={locale!}
      defaultLocale="fr"
      key={locale}
      messages={translations[props.locale]}
    >
      {props.children}
    </IntlProvider>
  );
}


export {
  InternationalisationComponent as Internationalisation
}