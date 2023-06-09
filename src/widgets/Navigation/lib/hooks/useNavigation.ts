import React, { useState } from "react";

export const useNavigation = () => {
  const [isNavigationMobileVisible, setIsNavigationMobileVisible] = useState<boolean>(false);

  const openMobileMavigation = () => setIsNavigationMobileVisible(true);
  const closeMobileNavigation = () => setIsNavigationMobileVisible(false);

  const scrollToAboutUs = (e: React.MouseEvent<HTMLDivElement>) => {
    window.scrollTo({
      top: 993,
      behavior: "smooth",
    });
    closeMobileNavigation();
  };

  const scrollToAdvantages = (e: React.MouseEvent<HTMLDivElement>) => {
    window.scrollTo({
      top: 2604,
      behavior: "smooth",
    });
    closeMobileNavigation();
  };

  const scrollToThemes = (e: React.MouseEvent<HTMLDivElement>) => {
    window.scrollTo({
      top: 3769,
      behavior: "smooth",
    });
    closeMobileNavigation();
  };

  const scrollToContacts = (e: React.MouseEvent<HTMLDivElement>) => {
    window.scrollTo({
      top: 4737,
      behavior: "smooth",
    });
    closeMobileNavigation();
  };

  return {
    scrollToAboutUs,
    scrollToAdvantages,
    scrollToThemes,
    scrollToContacts,
    isNavigationMobileVisible,
    openMobileMavigation,
    closeMobileNavigation
  };
};
