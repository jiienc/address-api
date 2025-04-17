import Regencies from "../models/regencyModel.js";

export const getRegencies = async (req, res) => {
  const { id } = req.params;
  try {
    const regencies = await Regencies.findAll({
      where: { province_id: id },
      attributes: ['id', 'name']
    });
    res.json(regencies);
  } catch (error) {
    console.log(error);
  }
}
