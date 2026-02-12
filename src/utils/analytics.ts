import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_ID;

/**
 * Initializes Google Analytics 4 if a valid Measurement ID is provided.
 */
export const initGA = () => {
  if (GA_MEASUREMENT_ID) {
    ReactGA.initialize(GA_MEASUREMENT_ID);
    console.log("GA4 Initialized");
  }
};

/**
 * Tracks a page view.
 * @param path The path of the page viewed.
 */
export const trackPageView = (path: string) => {
  if (GA_MEASUREMENT_ID) {
    ReactGA.send({ hitType: "pageview", page: path });
  }
};

/**
 * Tracks a custom event.
 * @param category The category of the event.
 * @param action The action performed.
 * @param label Optional label for the event.
 */
export const trackEvent = (category: string, action: string, label?: string) => {
  if (GA_MEASUREMENT_ID) {
    ReactGA.event({
      category,
      action,
      label,
    });
  }
};
