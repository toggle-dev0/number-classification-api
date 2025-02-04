const express = require("express");
const router = express.Router();
const axios = require("axios");
const numberEval = require("../utilities/numberEval");

router.get("/", async (req, res) => {
  let { num } = req.query;

  if (isNaN(Number(num))) {
    let info = {
      number: "alphabet",
      error: "true",
    };
    res.status(400).json(info);
    return;
  }

  let properties = [];
  if (numberEval.armstrongNum(num)) {
    properties.push("armstrong");
  }
  let even_or_odd = numberEval.numIsEven(Number(num)) ? "even" : "odd";
  properties.push(even_or_odd);
  let fun_fact = "";
  try {
    let res = await axios.get(`http://numbersapi.com/${num}/math`);
    fun_fact = res.data;
  } catch (error) {
    fun_fact = "There is no fun fact about this number 😭";
  }
  let info = {
    number: num,
    is_prime: numberEval.numIsPrime(Number(num)),
    is_perfect: numberEval.numIsPerfect(Number(num)),
    digit_sum: numberEval.sumOfDigits(num),
    properties: properties,
    fun_fact: fun_fact,
  };
  res.status(200).json(info);
});

module.exports = router;
