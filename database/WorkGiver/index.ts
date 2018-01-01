import FightFires from './FightFires';
import PatientGoToBedEmergencyTreatment from './PatientGoToBedEmergencyTreatment';
import PatientGoToBedTreatment from './PatientGoToBedTreatment';
import DoctorTendEmergency from './DoctorTendEmergency';
import DoctorRescue from './DoctorRescue';
import DoBillsMedicalHumanOperation from './DoBillsMedicalHumanOperation';
import DoctorTendToHumanlikes from './DoctorTendToHumanlikes';
import DoctorTendToSelf from './DoctorTendToSelf';
import DoctorFeedHumanlikes from './DoctorFeedHumanlikes';
import DoBillsMedicalAnimalOperation from './DoBillsMedicalAnimalOperation';
import DoctorTendToAnimals from './DoctorTendToAnimals';
import DoctorFeedAnimals from './DoctorFeedAnimals';
import TakeToBedToOperate from './TakeToBedToOperate';
import VisitSickPawn from './VisitSickPawn';
import PatientGoToBedRecuperate from './PatientGoToBedRecuperate';
import Flick from './Flick';
import DoExecution from './DoExecution';
import ReleasePrisoner from './ReleasePrisoner';
import TakePrisonerToBed from './TakePrisonerToBed';
import FeedPrisoner from './FeedPrisoner';
import DeliverFoodToPrisoner from './DeliverFoodToPrisoner';
import ChatWithPrisoner from './ChatWithPrisoner';
import Slaughter from './Slaughter';
import Milk from './Milk';
import Shear from './Shear';
import Tame from './Tame';
import Train from './Train';
import DoBillsCook from './DoBillsCook';
import DoBillsCookCampfire from './DoBillsCookCampfire';
import DoBillsButcherFlesh from './DoBillsButcherFlesh';
import CookFillHopper from './CookFillHopper';
import DoBillsBrew from './DoBillsBrew';
import HunterHunt from './HunterHunt';
import FixBrokenDownBuilding from './FixBrokenDownBuilding';
import Repair from './Repair';
import BuildRoofs from './BuildRoofs';
import RemoveRoofs from './RemoveRoofs';
import ConstructFinishFrames from './ConstructFinishFrames';
import ConstructDeliverResourcesToFrames from './ConstructDeliverResourcesToFrames';
import ConstructDeliverResourcesToBlueprints from './ConstructDeliverResourcesToBlueprints';
import Deconstruct from './Deconstruct';
import Uninstall from './Uninstall';
import ConstructRemoveFloors from './ConstructRemoveFloors';
import ConstructSmoothFloors from './ConstructSmoothFloors';
import GrowerHarvest from './GrowerHarvest';
import GrowerSow from './GrowerSow';
import Mine from './Mine';
import Drill from './Drill';
import PlantsCut from './PlantsCut';
import DoBillsMakeWeapons from './DoBillsMakeWeapons';
import DoBillsMachiningTable from './DoBillsMachiningTable';
import DoBillsComponentAssemblyBench from './DoBillsComponentAssemblyBench';
import DoBillsMakeApparel from './DoBillsMakeApparel';
import DoBillsSculpt from './DoBillsSculpt';
import DoBillsMedicalMechanoidOperation from './DoBillsMedicalMechanoidOperation';
import DoBillsUseCraftingSpot from './DoBillsUseCraftingSpot';
import DoBillsRefinery from './DoBillsRefinery';
import DoBillsProduceDrugs from './DoBillsProduceDrugs';
import DoBillsStonecut from './DoBillsStonecut';
import DoBillsSmelter from './DoBillsSmelter';
import UnloadCarriers from './UnloadCarriers';
import LoadTransporters from './LoadTransporters';
import HelpGatheringItemsForCaravan from './HelpGatheringItemsForCaravan';
import Strip from './Strip';
import BuryCorpses from './BuryCorpses';
import HaulCorpses from './HaulCorpses';
import Open from './Open';
import Refuel from './Refuel';
import RearmTraps from './RearmTraps';
import DoBillsCremate from './DoBillsCremate';
import DoBillsHaulCampfire from './DoBillsHaulCampfire';
import TakeBeerOutOfFermentingBarrel from './TakeBeerOutOfFermentingBarrel';
import FillFermentingBarrel from './FillFermentingBarrel';
import HaulGeneral from './HaulGeneral';
import CleanClearSnow from './CleanClearSnow';
import CleanFilth from './CleanFilth';
import Research from './Research';

const WorkGiver: DatabaseWorkGiver = {
  FightFires,
  PatientGoToBedEmergencyTreatment,
  PatientGoToBedTreatment,
  DoctorTendEmergency,
  DoctorRescue,
  DoBillsMedicalHumanOperation,
  DoctorTendToHumanlikes,
  DoctorTendToSelf,
  DoctorFeedHumanlikes,
  DoBillsMedicalAnimalOperation,
  DoctorTendToAnimals,
  DoctorFeedAnimals,
  TakeToBedToOperate,
  VisitSickPawn,
  PatientGoToBedRecuperate,
  Flick,
  DoExecution,
  ReleasePrisoner,
  TakePrisonerToBed,
  FeedPrisoner,
  DeliverFoodToPrisoner,
  ChatWithPrisoner,
  Slaughter,
  Milk,
  Shear,
  Tame,
  Train,
  DoBillsCook,
  DoBillsCookCampfire,
  DoBillsButcherFlesh,
  CookFillHopper,
  DoBillsBrew,
  HunterHunt,
  FixBrokenDownBuilding,
  Repair,
  BuildRoofs,
  RemoveRoofs,
  ConstructFinishFrames,
  ConstructDeliverResourcesToFrames,
  ConstructDeliverResourcesToBlueprints,
  Deconstruct,
  Uninstall,
  ConstructRemoveFloors,
  ConstructSmoothFloors,
  GrowerHarvest,
  GrowerSow,
  Mine,
  Drill,
  PlantsCut,
  DoBillsMakeWeapons,
  DoBillsMachiningTable,
  DoBillsComponentAssemblyBench,
  DoBillsMakeApparel,
  DoBillsSculpt,
  DoBillsMedicalMechanoidOperation,
  DoBillsUseCraftingSpot,
  DoBillsRefinery,
  DoBillsProduceDrugs,
  DoBillsStonecut,
  DoBillsSmelter,
  UnloadCarriers,
  LoadTransporters,
  HelpGatheringItemsForCaravan,
  Strip,
  BuryCorpses,
  HaulCorpses,
  Open,
  Refuel,
  RearmTraps,
  DoBillsCremate,
  DoBillsHaulCampfire,
  TakeBeerOutOfFermentingBarrel,
  FillFermentingBarrel,
  HaulGeneral,
  CleanClearSnow,
  CleanFilth,
  Research,
};

export default WorkGiver;
