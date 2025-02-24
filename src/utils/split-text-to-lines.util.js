import SplitType from "split-type";

export const splitTextToLines = (element) => {
    return new SplitType(element, {
        types: "lines",
    });
}