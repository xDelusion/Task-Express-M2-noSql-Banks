let accounts = require("../../accounts");
const Account = require("./db/models/Account");

// exports.accountCreate = (req, res) => {
//   const id = accounts[accounts.length - 1].id + 1;
//   const newAccount = { ...req.body, funds: 0, id };
//   accounts.push(newAccount);
//   res.status(201).json(newAccount);
// };

exports.accountCreate = async (req, res) => {
  try {
    const newAccount = await Account.create(req.body);
    return res.status(201).json(newAccount);
  } catch (error) {
    return res.status(500).json({ message: "Error" });
  }
};

// exports.accountDelete = (req, res) => A
//   const { accountId } = req.params;
//   const foundAccount = accounts.find((account) => account.id === +accountId);
//   if (foundAccount) {
//     accounts = accounts.filter((account) => account.id !== +accountId);
//     res.status(204).end();
//   } else {
//     res.status(404).json({ message: 'Account not found' });
//   }
// };

exports.accountDelete = async (req, res) => {
  try {
    const { accountId } = req.params;
    const foundAccount = await Account.findById(accountId);
    if (!foundAccount) {
      return res.status(404).json({ message: "Account not found" });
    }
    foundAccount.deleteOne();
    return res.status(204).end();
  } catch (error) {}
};

// exports.accountUpdate = (req, res) => {
//   const { accountId } = req.params;
//   const foundAccount = accounts.find((account) => account.id === +accountId);
//   if (foundAccount) {
//     foundAccount.funds = req.body.funds;
//     res.status(204).end();
//   } else {
//     res.status(404).json({ message: "Account not found" });
//   }
// };

// exports.accountsGet = (req, res) => {
//   res.json(accounts);
// };

exports.accountUpdate = async (req, res) => {
  try {
    const { accountId } = req.params;
    const foundAccount = await Account.findById(accountId);
    await Account.updateOne(req.body);
    res.status(204).json(accounts);
    if (foundAccount) {
      return accounts.findByIdAndUpdate();
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.accountsGet = async (req, res) => {
  try {
    const accounts = await Account.find(" -createdAt -updatedAt ");
    return res.status(201).json(accounts);
  } catch (error) {
    return res.status(500).json({ message: "Error" });
  }
};

exports.getAccountByUsername = (req, res) => {
  const { username } = req.params;
  const foundAccount = accounts.find(
    (account) => account.username === username
  );
  if (req.query.currency === "usd") {
    const accountInUsd = { ...foundAccount, funds: foundAccount.funds * 3.31 };
    res.status(201).json(accountInUsd);
  }
  res.status(201).json(foundAccount);
};
