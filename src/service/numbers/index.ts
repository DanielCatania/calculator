import React from "react";

const initialEnrollees: Array<React.Dispatch<React.SetStateAction<string>>> =
  [];

const numbersService = {
  enrolled: initialEnrollees,
  enroll(func: React.Dispatch<React.SetStateAction<string>>) {
    this.enrolled.push(func);
  },
  notify() {
    this.enrolled.forEach((func: Function) => {
      func(this.number);
    });
  },

  numericKeys: ["7", "8", "9", "4", "5", "6", "1", "2", "3", "+/-", "0", "."],
  number: "0",
  setNumber(number: string) {
    this.number = number;
    this.notify();
  },
  addNumber(numberKey: string) {
    if (numberKey === "+/-") {
      if (this.number !== "0") {
        const indexLess = this.number.indexOf("-");
        this.number =
          indexLess !== -1 ? this.number.replace("-", "") : `-${this.number}`;
      } else {
        return;
      }
    } else if (numberKey === ".") {
      const indexPoint = this.number.indexOf(".");
      if (indexPoint !== -1) {
        return;
      }
      this.number += numberKey;
    } else if (this.number === "0" && numberKey !== ".") {
      this.number = numberKey;
    } else {
      this.number += numberKey;
    }

    this.notify();
  },
  resetNumber() {
    this.number = "0";
    this.notify();
  },
};

export default numbersService;
