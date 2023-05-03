import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import { useUser } from '@auth0/nextjs-auth0/client';


export default function Index() {
  const { user, isLoading } = useUser();
  const collapseItems = [
    "Profile",
    "Dashboard",
    // "Activity",
    // "Analytics",
    // "System",
    // "Deployments",
    "My Settings",
    // "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <>
      <Navbar variant="default" css={{bs:'none'}}>
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand css={{"@xs": {w: "60%",},}}>
          <Text size={32} css={{textGradient: "0deg, $blue600 -20%, #7d8597 50%"}} weight="bold">trave</Text>
          <Text size={32} css={{textGradient: "0deg, $blue600 -20%, #4e85ff 50%",pr:'5px'}} weight="bold" >llo</Text>
        </Navbar.Brand>

        <Navbar.Content
          enableCursorHighlight
          activeColor="primary"
          hideIn="xs"
          variant="highlight-rounded"
        >
          <Navbar.Link href="#">Home</Navbar.Link>
          <Navbar.Link isActive href="#">About</Navbar.Link>
          <Navbar.Link href="#">Tours</Navbar.Link>
          <Navbar.Link href="#">For Guides</Navbar.Link>
        </Navbar.Content>




        <Navbar.Content css={{"@xs": {w: "12%",jc: "flex-end",},}}>
          {user ? (
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                {/* avatar signed in */}
                <Avatar
                  bordered
                  as="button"
                  color="primary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>

            <Dropdown.Menu
              aria-label="User menu actions"
              color="primary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Account
              </Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                Analytics
              </Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          ) :
          <Navbar.Link href="/api/auth/login">Login</Navbar.Link>}
        </Navbar.Content>




        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="primary"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
      {/* <Hero /> */}
      {/* <hr /> */}
      {/* <Content /> */}
    </>
  );
}
