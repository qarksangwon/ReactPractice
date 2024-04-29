const Heading = (props) => {
  return <h1>{props.text}</h1>;
};

const Paragraph = (props) => {
  return <p>{props.text}</p>;
};

const Section = (props) => {
  return (
    <div>
      <Heading text={props.title} />
      <Paragraph text={props.content} />
    </div>
  );
};

export default Section;
