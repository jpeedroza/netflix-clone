import { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import ContentEmail from "./ContentEmail";

const Accordion = withStyles({
  root: {
    boxShadow: "none",
    backgroundColor: "#303030",
    color: "white",
    width: "45vw",
    marginBottom: "7px",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    fontSize: "24px",
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "2px solid rgba(0, 0, 0, 1)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderBottom: "7px solid rgba(0, 0, 0, 1)",
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <h1 className="text-7xl font-semibold text-white my-10">
        Frequently Asked Questions
      </h1>
      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <h1>What is Netflix?</h1>
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-xl leading-7">
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries, and more on
            thousands of internet-connected devices. <br /> <br /> You can watch
            as much as you want, whenever you want without a single commercial –
            all for one low monthly price. There's always something new to
            discover and new TV shows and movies are added every week!
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <h1>How much does Netflix cost?</h1>
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-xl leading-7">
            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
            streaming device, all for one fixed monthly fee. Plans range from
            BRL21.90 to BRL45.90 a month. No extra costs, no contracts.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <h1>Where can i watch?</h1>
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-xl leading-7">
            Watch anywhere, anytime, on an unlimited number of devices. Sign in
            with your Netflix account to watch instantly on the web at
            netflix.com from your personal computer or on any internet-connected
            device that offers the Netflix app, including smart TVs,
            smartphones, tablets, streaming media players and game consoles.
            <br /> <br /> You can also download your favorite shows with the
            iOS, Android, or Windows 10 app. Use downloads to watch while you're
            on the go and without an internet connection. Take Netflix with you
            anywhere.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <h1>How do i cancel?</h1>
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-xl leading-7">
            Netflix is flexible. There are no pesky contracts and no
            commitments. You can easily cancel your account online in two
            clicks. There are no cancellation fees – start or stop your account
            anytime.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <h1>What can i watch on Netflix?</h1>
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-xl leading-7">
            Netflix has an extensive library of feature films, documentaries, TV
            shows, anime, award-winning Netflix originals, and more. Watch as
            much as you want, anytime you want.
          </p>
        </AccordionDetails>
      </Accordion>
      <ContentEmail />
    </>
  );
}
