import Regencies from "../models/regencyModel.js";

export const getRegencies = async (req, res) => {
  try {
    const regencies = await Regencies.findAll({
      attributes: ['id', 'name']
    });
    res.json(regencies);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const getRegenciesById = async (req, res) => {
  const { id } = req.params;
  try {
    const regencies = await Regencies.findAll({
      where: { province_id: id },
      attributes: ['id', 'name']
    });
    res.json(regencies);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
