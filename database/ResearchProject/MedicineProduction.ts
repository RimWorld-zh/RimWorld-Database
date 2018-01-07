const MedicineProduction: DataResearchProject = {
  techLevel: TechLevel.Industrial,
  baseCost: 1500,
  prerequisites: [
    'DrugProduction',
    'MicroelectronicsBasics'
  ],
  requiredByThis: null,
  requiredResearchBuilding: 'HiTechResearchBench',
  requiredResearchFacilities: null,
  tags: null,
  researchViewX: 7,
  researchViewY: 0,
  defName: 'MedicineProduction'
}

export default MedicineProduction;
