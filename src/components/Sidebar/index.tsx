import { Box, Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export const SideBar = () => {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
          <NavLink icon={RiContactsLine}>Usuários</NavLink>
        </NavSection>
        <NavSection title="AUTOMAÇÃO">
        <NavLink icon={RiGitMergeLine}>Formulários</NavLink>
        <NavLink icon={RiInputMethodLine}>Automação</NavLink>
        </NavSection>
      </Stack>
    </Box>
  );
};
