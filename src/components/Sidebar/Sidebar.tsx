"use client";
import React, { useState } from "react";
import {
  Header,
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavLink,
  SideNavItem,
} from "@carbon/react";
import {
  OpenPanelLeft,
  Home,
  CarbonIconType,
  ExpandCategories,
  Activity,
} from "@carbon/icons-react";
import "./Sidebar.scss";

interface NavigationRoute {
  label: string;
  url?: string;
  Icon: CarbonIconType;
  action?: () => void;
  children?: NavigationRoute[];
}

const COMPONENT_NAME = "sidebar";

const SideNavSection = ({
  label,
  url,
  action,
  children,
  Icon,
}: NavigationRoute) => {
  if (children) {
    return (
      <SideNavMenu
        title={
          <div className={`${COMPONENT_NAME}__item`}>
            <Icon />
            <div className={`${COMPONENT_NAME}__item-text`}>{label}</div>
          </div>
        }
      >
        {children.map((child) => (
          <SideNavSection key={`${label}-${child.label}`} {...child} />
        ))}
      </SideNavMenu>
    );
  }

  if (url)
    return (
      <SideNavLink href={url} className={`${COMPONENT_NAME}__item`}>
        <Icon />
        <div className={`${COMPONENT_NAME}__item-text`}>{label}</div>
      </SideNavLink>
    );

  if (action)
    return (
      <SideNavItem onClick={action} className={`${COMPONENT_NAME}__item`}>
        <Icon />
        <div className={`${COMPONENT_NAME}__item-text`}>{label}</div>
      </SideNavItem>
    );

  return <></>;
};

export const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  const NAVIGATION_DETAILS: NavigationRoute[] = [
    {
      label: "Home",
      Icon: Home,
      url: "/",
    },
    {
      label: "More...",
      Icon: ExpandCategories,
      children: [
        {
          label: "More 1",
          Icon: Activity,
          url: "/more-1",
        },
      ],
    },
  ];

  return (
    <>
      <Header>
        <div className={`${COMPONENT_NAME}__control`}>
          <OpenPanelLeft onClick={() => setIsExpanded(!isExpanded)} />
        </div>
      </Header>
      <SideNav expanded={isExpanded} isChildOfHeader={false}>
        <SideNavItems>
          {NAVIGATION_DETAILS.map((item) => (
            <SideNavSection key={item.label} {...item} />
          ))}
        </SideNavItems>
      </SideNav>
    </>
  );
};
