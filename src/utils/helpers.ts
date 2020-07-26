const MONTHS = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  "10": "October",
  "11": "November",
  "12": "December",
};

export const formatDate = (dateData: string) => {
  // Sometimes date data comes in the form of ms, sometimes it's formatted
  // like: 2020-06-26T00:00:00.000Z
  // Idk why, so workaround:
  const date = isNaN(Number(dateData))
    ? new Date(dateData)
    : new Date(Number(dateData));

  if (date.toString() === "Invalid Date") {
    console.error(`Input passed cannot be converted into a Date.`);
    return "The date has not been correctly processed.";
  }

  const [day, month, year] = date.toLocaleDateString().split("/");
  return `${MONTHS[month]} ${day[0] === "0" ? day[1] : day}, ${year}`;
};

type FrontmatterData = {
  title: string;
  date: string | null;
  description: string | null;
};

export const checkFrontmatterData = ({
  title,
  date,
  description,
}: FrontmatterData): void | never => {
  if (title === "") {
    throw new Error(
      "title is empty. It must have been forgotten in the post frontmatter."
    );
  }
  if (date === null) {
    throw new Error(
      "date is null. It must have been forgotten in the post frontmatter."
    );
  }
  if (description === null) {
    throw new Error(
      "description is null. It must have been forgotten in the post frontmatter."
    );
  }
};
