import { useRouter } from "next/router";
import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
export default function Gnb() {
  const [activeItem, setActiveItem] = useState("home");
  const router = useRouter();

  const goLink = (e, data) => {
    console.log("data:", data);
    console.log("e:", e);
    if (data.name === "home") {
      setActiveItem("home");
      router.push("/");
    } else if (data.name === "about") {
      setActiveItem("about");
      router.push("/about");
    }
  };

  return (
    <Menu inverted>
      <Menu.Item name="home" active={activeItem === "home"} onClick={goLink} />
      <Menu.Item
        name="about"
        active={activeItem === "about"}
        onClick={goLink}
      />
    </Menu>
  );
}


//location.href를 이용하면 페이지가 새로고침 되면서 이동됨. -요청이 늘어남
//사용하지 않고 next Link를 이용하면 페이지안에서 내용물만 바뀜. 