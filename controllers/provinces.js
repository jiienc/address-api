import Provinces from "../models/provinceModel.js";

export const getProvinces = async (req, res) => {
  try {
    const provinces = await Provinces.findAll({
      attributes: ['id', 'name']
    });
    res.json(provinces);
  } catch (error) {
    console.log(error);
  }
}
