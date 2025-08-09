import { useLocation, NavLink } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-6xl font-bold gradient-text">404</h1>
        <p className="mt-3 text-lg text-muted-foreground">Oops! Page not found</p>
        <NavLink to="/" className="inline-block mt-6">
          <span className="story-link">Return to Home</span>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
