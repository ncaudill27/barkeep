export function renderAmount(amount: string) {
  let [first, second] = amount.split(" ");

  return (
    <>
      {fractionToEntity(first)}
      {fractionToEntity(second)}
    </>
  );
}

export function amountToNumber(amount: string) {
  let [first, second] = amount.split(" ");

  return fractionToFloat(first) + fractionToFloat(second);
}

export function numberToAmount(number: number) {
  let [first, second] = number.toString().split(".");
  if (first === "0") first = "";

  return first + " " + numberToFraction(second);
}

function fractionToEntity(number: string) {
  switch (number) {
    case "1/4":
      return <>&frac14;</>;

    case "1/2":
      return <>&frac12;</>;

    case "3/4":
      return <>&frac34;</>;

    case undefined:
      return "";

    default:
      return number;
  }
}

function fractionToFloat(number: string) {
  switch (number) {
    case "1/4":
      return 0.25;

    case "1/2":
      return 0.5;

    case "3/4":
      return 0.75;

    case undefined:
      return 0;

    default:
      return parseInt(number, 10);
  }
}

function numberToFraction(number: string) {
  switch (number) {
    case "25":
      return "1/4";

    case "5":
      return "1/2";

    case "75":
      return "3/4";

    case undefined:
      return "";

    default:
      return number.toString();
  }
}

export const parseMeasurement = (measurement: string, amount: string) => {
  let [first, second] = amount.split(" ");

  if (measurement === "ounces") measurement = "oz";
  if (first === "1" && second === undefined) {
    measurement = makeSingular(measurement);
  }

  return measurement;
};

function makeSingular(measurement: string) {
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
