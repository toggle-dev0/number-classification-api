const express = require("express");
const router = express.Router();
const axios = require("axios");
const numberEval = require("../utilities/numberEval");

router.get("/", async (req, res) => {
  let { number } = req.query;

  if (isNaN(Number(number))) {
    let info = {
      number: "alphabet",
      error: "true",
    };
    res.status(400).json(info);
    return;
  }

  let properties = [];
  if (numberEval.armstrongNum(number)) {
    properties.push("armstrong");
  }
  let even_or_odd = numberEval.numIsEven(Number(number)) ? "even" : "odd";
  properties.push(even_or_odd);
  let fun_fact = "";
  try {
    let res = await axios.get(`http://numbersapi.com/${number}/math`);
    fun_fact = res.data;
  } catch (error) {
    fun_fact = "There is no fun fact about this number 😭";
  }
  let info = {
    number: number,
    is_prime: numberEval.numIsPrime(Number(number)),
    is_perfect: numberEval.numIsPerfect(Number(number)),
    digit_sum: numberEval.sumOfDigits(number),
    properties: properties,
    fun_fact: fun_fact,
  };
  res.status(200).json(info);
});

module.exports = router;
