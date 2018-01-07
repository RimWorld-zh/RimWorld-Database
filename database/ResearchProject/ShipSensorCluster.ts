const ShipSensorCluster: DataResearchProject = {
  techLevel: TechLevel.Spacer,
  baseCost: 3000,
  prerequisites: [
    'ShipBasics',
    'GroundPenetratingScanner',
    'LongRangeMineralScanner'
  ],
  requiredByThis: null,
  requiredResearchBuilding: 'HiTechResearchBench',
  requiredResearchFacilities: [
    'MultiAnalyzer'
  ],
  tags: null,
  researchViewX: 12,
  researchViewY: 0,
  defName: 'ShipSensorCluster'
}

export default ShipSensorCluster;
