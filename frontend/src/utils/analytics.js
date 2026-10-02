/**
 * Google Ads Conversion Tracking Utility for Aquasol Energy
 * 
 * Google Ads ID: AW-18471556617
 * Conversion Action: Contact (send_to: AW-18471556617/UZoZCJbauYsdEIms9udE)
 */

export const GOOGLE_ADS_ID = 'AW-18471556617';
export const CONTACT_CONVERSION_SEND_TO = 'AW-18471556617/UZoZCJbauYsdEIms9udE';

/**
 * Fires the Google Ads "Contact" conversion event safely.
 * Only invoke this function when a user has successfully completed a contact,
 * quote, or survey form submission with valid information.
 * 
 * @param {Object} [customParams={}] - Optional metadata for tracking/logging
 */
export const trackContactConversion = (customParams = {}) => {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: CONTACT_CONVERSION_SEND_TO,
        ...customParams,
      });
      if (import.meta.env.DEV) {
        console.log('[Google Ads] Contact conversion event successfully sent:', {
          send_to: CONTACT_CONVERSION_SEND_TO,
          ...customParams,
        });
      }
    } else {
      if (import.meta.env.DEV) {
        console.warn('[Google Ads] window.gtag is not defined. Conversion event not sent.');
      }
    }
  } catch (error) {
    console.error('[Google Ads] Error triggering contact conversion:', error);
  }
};
