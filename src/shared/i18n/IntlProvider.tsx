import * as React from 'react';
import * as i18next from 'i18next';
import { withRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { connect } from 'react-redux';
import { getLocale } from '../store/app/selectors';

const deDE = require('./locales/de-DE.json');
const enUS = require('./locales/en-US.json');

i18next.init({
  fallbackLng: 'en-US',
  fallbackNS: ['translation'],
  resources: {
    'de-DE': deDE,
    'en-US': enUS,
  },
  parseMissingKeyHandler: missing => {
    if (process.env.NODE_ENV === 'development') {
      console.warn('MISSING TRANSLATION:', missing);
    }
    return missing;
  },
});

interface Props {
  locale: string;
}

class I18N extends React.PureComponent<Props> {
  componentDidMount() {
    i18next.changeLanguage(this.props.locale);
  }

  componentDidUpdate(prevProps) {
    const { locale: newLocale } = this.props;
    const { locale: oldLocale } = prevProps;

    if (oldLocale !== newLocale) {
      i18next.changeLanguage(newLocale);
    }
  }

  render() {
    return <I18nextProvider i18n={i18next}>{this.props.children}</I18nextProvider>;
  }
}

const mapStateToProps = state => ({
  locale: getLocale(state),
});

export default withRouter(
  connect(
    mapStateToProps,
    null,
    null,
    { pure: false },
  )(I18N),
);
