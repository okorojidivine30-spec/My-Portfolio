// import { useState } from "react";
// import { NavLink } from "react-router-dom";

// export default function Nav() {
//   const navigationScreens = [
//     { id: 1, path: "/", name: "Home" },
//     { id: 2, path: "/work", name: "Work" },
//     { id: 3, path: "/about", name: "About" },
//     { id: 4, path: "/contact", name: "Contact" },
//   ];

//   const [hovered, setHovered] = useState(null);
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div
//       style={{
//         justifyContent: "space-between",
//         padding: "15px 25px",
//         display: "flex",
//         alignItems: "center",
//         position: "sticky",
//         zIndex: "50",
//         top: "0",
//         backgroundColor: "black",
//         backdropFilter: "blur(10px)",
//       }}
//     >
//       <div
//         style={{
//           alignItems: "center",
//           display: "flex",
//           gap: "5px",
//           fontWeight: "bold",
//         }}
//       >
//         <span
//           style={{
//             color: "black",
//             backgroundColor: "gold",
//             borderRadius: "10px",
//             padding: "10px",
//           }}
//         >
//           DO
//         </span>

//         <p style={{ color: "white" }}>Divine Okoroji</p>
//       </div>

//       <button
//         onClick={() => setMenuOpen(!menuOpen)}
//         style={{
//           color: "white",
//           background: "none",
//           border: "none",
//           fontSize: "25px",
//           cursor: "pointer",
//         }}
//       >
//         {menuOpen ? "✕" : "☰"}
//       </button>

//       <div
//         style={{
//           display: "flex",
//           listStyleType: "none",
//           flexDirection: "row",
//           gap: "15px",
//         }}
//       >
//         {navigationScreens.map((item) => {
//           const isHovered = hovered === item.id;

//           return (
//             <NavLink
//               key={item.id}
//               to={item.path}
//               end={item.path === "/"}
//               onMouseEnter={() => setHovered(item.id)}
//               onMouseLeave={() => setHovered(null)}
//               style={({ isActive }) => ({
//                 color: isActive ? "gold" : isHovered ? "white" : "gray",

//                 textDecoration: "none",

//                 borderBottom: isActive
//                   ? "2px solid gold"
//                   : "2px solid transparent",

//                 paddingBottom: "5px",
//                 transition: "0.3s ease",
//               })}
//             >
//               {item.name}
//             </NavLink>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const navigationScreens = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/work", name: "Work" },
    { id: 3, path: "/about", name: "About" },
    { id: 4, path: "/contact", name: "Contact" },
  ];

  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      style={{
        padding: "15px 25px",
        position: "sticky",
        zIndex: "50",
        top: "0",
        backgroundColor: "black",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* TOP NAVBAR */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* LOGO */}
        <div
          style={{
            alignItems: "center",
            display: "flex",
            gap: "5px",
            fontWeight: "bold",
          }}
        >
          <span
            style={{
              color: "black",
              backgroundColor: "gold",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            DO
          </span>

          <p style={{ color: "white" }}>Divine Okoroji</p>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          style={{
            color: "white",
            background: "none",
            border: "none",
            fontSize: "26px",
            cursor: "pointer",
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* DESKTOP NAV */}
        <div
          className="hidden md:flex"
          style={{
            alignItems: "center",
            gap: "40px",
          }}
        >
          {navigationScreens.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              end={item.path === "/"}
              style={({ isActive }) => ({
                color: isActive ? "gold" : "gray",
                textDecoration: "none",
                borderBottom: isActive
                  ? "2px solid gold"
                  : "2px solid transparent",
                paddingBottom: "5px",
              })}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* MOBILE NAV */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            right: "20px",
            width: "160px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            padding: "20px",
            backgroundColor: "black",
            border: "1px solid #333",
            borderRadius: "10px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
          }}
        >
          {navigationScreens.map((item) => {
            const isHovered = hovered === item.id;

            return (
              <NavLink
                key={item.id}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setMenuOpen(false)}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                style={({ isActive }) => ({
                  color: isActive ? "gold" : isHovered ? "white" : "gray",

                  textDecoration: "none",

                  borderBottom: isActive
                    ? "2px solid gold"
                    : "2px solid transparent",

                  paddingBottom: "5px",

                  transition: "0.3s ease",
                })}
              >
                {item.name}
              </NavLink>
            );
          })}
        </div>
      )}
    </div>
  );
}
