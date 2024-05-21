import Typewriter from "typewriter-effect";
const Autotyping = (props) => {
  const { string } = props;
  return (
    <Typewriter
      options={{
        strings: string,
        autoStart: true,
        loop: true,
      }}
    />
  );
};
export default Autotyping;
