import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate, useLocation } from "react-router-dom";

interface Breadcrumb {
  label: string;
  url: string | null;
}

export default function BreadcrumpSeparator() {
  const navigate = useNavigate();
  const location = useLocation();

  const [breadcrumbs, setBreadcrumbs] = React.useState<Breadcrumb[]>([]);

  React.useEffect(() => {
    const pathnames = location.pathname.split('/').filter((x) => x);
    const crumbList = pathnames.map((value, index) => {
      const url = `/${pathnames.slice(0, index + 1).join('/')}`;
      return { label: value.charAt(0).toUpperCase() + value.slice(1), url };
    });

    // Add 'Home' breadcrumb at the start, pointing to '/dashboard'
    setBreadcrumbs([{ label: "Home", url: "/home" }, ...crumbList]);
  }, [location]);

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    url: string | null
  ) => {
    event.preventDefault();
    if (url) {
      navigate(url);
    }
  };

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs.map((crumb, index) =>
          crumb.url ? (
            <Link
              underline="none"
              key={index}
              color="#222"
              href={crumb.url}
              onClick={(event) => handleClick(event, crumb.url)}
            >
              {crumb.label}
            </Link>
          ) : (
            <Typography key={index} color="text.primary">
              {crumb.label}
            </Typography>
          )
        )}
      </Breadcrumbs>
    </Stack>
  );
}
