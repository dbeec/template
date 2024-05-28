import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate, useLocation } from "react-router-dom";
import { Typography } from "@mui/material";

interface Breadcrumb {
  label: string;
  url: string | null;
}

export default function BreadcrumpSeparator() {
  const navigate = useNavigate();
  const location = useLocation();

  const [breadcrumbs, setBreadcrumbs] = React.useState<Breadcrumb[]>([]);

  React.useEffect(() => {
    const pathnames = location.pathname.split("/").filter((x) => x);

    let crumbList: Breadcrumb[] = [];
    if (pathnames.length === 0) {
      crumbList = [{ label: "Home", url: "/home" }];
    } else if (pathnames.length === 1) {
      crumbList = [
        {
          label: pathnames[0].charAt(0).toUpperCase() + pathnames[0].slice(1),
          url: location.pathname,
        },
      ];
    } else {
      crumbList = pathnames.map((value, index) => {
        const url = `/${pathnames.slice(0, index + 1).join("/")}`;
        return { label: value.charAt(0).toUpperCase() + value.slice(1), url };
      });
    }

    setBreadcrumbs(crumbList);
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
              <Typography
                sx={{
                  fontFamily: "Urbanist",
                  fontWeight: "500",
                  fontSize: "1rem",
                }}
              >
                {crumb.label}
              </Typography>
            </Link>
          ) : (
            <p key={index}>{crumb.label}</p>
          )
        )}
      </Breadcrumbs>
    </Stack>
  );
}
