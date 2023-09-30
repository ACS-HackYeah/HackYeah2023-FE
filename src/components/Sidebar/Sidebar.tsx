"use client";
import React, { useState } from "react";
import {
  Header,
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavLink,
  SideNavItem,
  HeaderName,
} from "@carbon/react";
import {
  OpenPanelLeft,
  Home,
  CarbonIconType,
  ExpandCategories,
  Activity,
  Group,
  Flag,
  Cognitive,
  TrainSpeed,
  WordCloud,
  Asleep,
  Search,
  DataEnrichmentAdd,
} from "@carbon/icons-react";
import "./Sidebar.scss";

interface NavigationRoute {
  label: string;
  url?: string;
  Icon: CarbonIconType;
  expanded?: boolean;
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
  expanded = false,
}: NavigationRoute) => {
  if (children) {
    return (
      <SideNavMenu
        defaultExpanded={expanded}
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
      label: "Support groups",
      Icon: Group,
      expanded: true,
      children: [
        {
          label: "Expats in Poland",
          Icon: Flag,
          children: [
            {
              label: "Search",
              Icon: Search,
              url: "/search/expats-in-poland",
            },
            {
              label: "English",
              Icon: Activity,
              url: "/expats-in-poland/english",
            },
            {
              label: "German",
              Icon: Activity,
              url: "/expats-in-poland/german",
            },
            {
              label: "Spanish",
              Icon: Activity,
              url: "/expats-in-poland/spanish",
            },
            {
              label: "Hindi",
              Icon: Activity,
              url: "/expats-in-poland/hindi",
            },
          ],
        },
        {
          label: "Neurodivergence",
          Icon: Cognitive,
          children: [
            {
              label: "Search",
              Icon: Search,
              url: "/search/neurodivergence",
            },
            {
              label: "ADHD",
              Icon: TrainSpeed,
              url: "/neurodivergence/adhd",
            },
            {
              label: "Autism",
              Icon: WordCloud,
              url: "/neurodivergence/autism",
            },
            {
              label: "Depression",
              Icon: Asleep,
              url: "/neurodivergence/depression",
            },
          ],
        },
      ],
    },
    {
      label: "Find Support Group",
      Icon: Search,
      url: "/search/others",
    },
    {
      label: "Add Group",
      Icon: DataEnrichmentAdd,
      url: "/add",
    },
  ];

  return (
    <>
      <Header>
        <div className={`${COMPONENT_NAME}__control`}>
          <OpenPanelLeft onClick={() => setIsExpanded(!isExpanded)} />
        </div>
        <HeaderName className={`${COMPONENT_NAME}__header-name`} prefix="">
          ThoughtsOverflow
        </HeaderName>
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
