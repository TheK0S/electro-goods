import React, { useContext } from "react";

export interface ShowFilter {
  isShowFilter: boolean;
  showFilter: (isValue: boolean) => void;
};

export interface ShowInvitedContent {
  isShowInvitedContent: boolean;
  showInvitedContent: (isValue: boolean) => void;
};

export interface ShowBreadCrumb {
  isShowBreadCrumb: boolean;
  showBreadCrumb: (isValue: boolean) => void;
};

export const ShowFilterContext = React.createContext<ShowFilter>({
    isShowFilter:false,
    showFilter: () => {},
  });

  export const ShowInvitedContentContext = React.createContext<ShowInvitedContent>({
    isShowInvitedContent:false,
    showInvitedContent: () => {},
  });

  export const ShowBreadCrumbContext = React.createContext<ShowBreadCrumb>({
    isShowBreadCrumb:false,
    showBreadCrumb: () => {},
  });

export const useShowFilterContext = () => useContext(ShowFilterContext);
export const useShowInvitedContentContext = () => useContext(ShowInvitedContentContext);
export const useShowBreadCrumbContext = () => useContext(ShowBreadCrumbContext);