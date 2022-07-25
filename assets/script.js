const measureSelection = document.querySelectorAll("select");

const measureSelectionList = ["kg", "g", "mg"];

measureSelectionList.forEach((measure) => {
    option = new Option(measure, measure.toLowerCase());
    measureSelection.options[measureSelection.options.length] = option;
  });