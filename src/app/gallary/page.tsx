import { LINKS } from "@/data/constants";
import Link from "next/link";
import React from "react";

type Props = {};

const Gallay = (props: Props) => {
  return (
    <div>
      <h2>Gallay To be implemented</h2>
      <p>
        Explore my{" "}
        <Link target="_blank" href={LINKS.social.instagram}>
          Instagram
        </Link>{" "}
        gallery while I work on completing this page.
      </p>
    </div>
  );
};

export default Gallay;
