export const parseAmount = (amount: string) => {
  let [first, second] = amount.split(" ");

  return (
    <>
      {convertFraction(first)}
      {convertFraction(second)}
    </>
  );
};

function convertFraction(number: string) {
  switch (number) {
    case "1/4":
      return <>&frac14;</>;

    case "1/2":
      return <>&frac12;</>;

    case "3/4":
      return <>&frac34;</>;

    case "undefined":
      return "";

    default:
      return number;
  }
}

export const parseMeasurement = (measurement: string, amount: string) => {
  let [first, second] = amount.split(" ");

  if (measurement === "ounces") measurement = "oz";
  if (first === "1" && second === undefined) {
    measurement = measureSwitch(measurement);
  }

  return measurement;
};

function measureSwitch(measurement: string) {
  switch (measurement) {
    case "dashes":
      return "dash";

    case "slices":
      return "slice";

    case "leaves":
      return "leaf";

    default:
      return measurement;
  }
}
