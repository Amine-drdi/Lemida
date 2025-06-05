import {
  MdLocalPharmacy,
  MdOutlineBabyChangingStation,
  MdPregnantWoman,
  MdElectricBolt,
  MdAccountBalanceWallet,
} from "react-icons/md";
import {
  FaBaby,
  FaUserNurse,
  FaHandHoldingMedical,
  FaEnvira,
} from "react-icons/fa";
import {
  GiFootprint,
  GiDiscussion,
  GiJoint,
  GiBrain,
  GiMedicinePills,
  GiHospital,
  GiMagnifyingGlass,
} from "react-icons/gi";
import { FaHeartPulse, FaHelmetSafety } from "react-icons/fa6";
import { RiPsychotherapyLine } from "react-icons/ri";
import { LiaStethoscopeSolid } from "react-icons/lia";
import {
  TbMassage,
  TbDentalBroken,
  TbOld,
  TbBackhoe,
  TbForklift,
  TbCarCrane,
  TbCar4WdFilled,
  TbContract,
  TbBriefcaseFilled,
  TbDental,
} from "react-icons/tb";
import { PiLadderSimpleLight, PiMicrosoftWordLogoFill } from "react-icons/pi";
import { LuCable } from "react-icons/lu";
import { SiPaloaltosoftware } from "react-icons/si";
import { AiFillPrinter } from "react-icons/ai";

export const medicalCategories = [
  {  id : 1,
    name: "Améliorer la gestion de l’occlusion en prothèse",
    icon: TbDentalBroken,
  },
  {
    id : 2,
    name: "Cervicalgie en phase aiguë",
    icon: TbMassage,
  },
  {
    id : 3,
    name: "Endométriose",
    icon: TbDental,
  },

  {
    id : 4,
    name: "Lombalgie chronique en kinésithérapie ",
    icon: TbMassage,
  },

  {
    id : 5,
    name: "Maîtriser les restaurations adhésives",
    icon: TbDental,
  },

  {
    id : 6,
    name: "Prise en charge de l’usure dentaire pathologique",
    icon: TbDentalBroken,
  },

  {
    id : 7,
    name: "Suivi de grossesse par les sage-femmes",
    icon: MdPregnantWoman,
  },

  {
    id : 8,
    name: "Accompagnement à la parentalité par les sage-femmes",
    icon: RiPsychotherapyLine,
  },

  {
    id : 9,
    name: "Cervicalgie en phase aigüe ",
    icon: TbMassage,
  },

  {
    id : 10,
    name: "Endométriose ",
    icon: FaUserNurse,
  },

  { id : 11,
    name: "Lombalgie chronique",
    icon: FaHandHoldingMedical,
  },

  { id : 12,
    name: "Suivi de grossesse par les sage-femmes",
    icon: LiaStethoscopeSolid,
  },
];

export const btpCategories = [
  { id : 0,
    name: "CACES R482 (Catégories A, B1 et F)",
    icon: TbBackhoe,
  },
  {  id :1,
    name: " Montage et Démontage d’Échafaudages Fixes (R408)",
    icon: TbCarCrane,
  },
  {  id :2,
    name: "Habilitations Électriques B0/H0/H0V",
    icon: TbForklift,
  },
  {  id : 3,
    name: "Habilitation Électrique B1-B2-BR-BC-H1-H2",
    icon: FaUserNurse,
  },
  { id : 4,
    name: "RGE FEEBAT RENOVE",
    icon: TbCar4WdFilled,
  },
  { id :5,
    name: "Travail en Hauteur et Prévention des Risques",
    icon: PiLadderSimpleLight,
  },
  {  id :6,
    name: "Gestion et Sécurité des Travaux de Démolition",
    icon: LuCable,
  },
  { id :7,
    name: "CACES R486 - Conduite de Nacelles Élévatrices (PEMP)",
    icon: MdElectricBolt,
  },
  { id : 8,
    name: "Sauveteur Secouriste du Travail (SST)",
    icon: FaHelmetSafety,
  },

  { id : 9,
    name: "Montage et Utilisation d’Échafaudages Roulants",
    icon: FaEnvira,
  },
  {  id : 10,
    name: " CACES R489 - Conduite de Chariots Élévateurs (Catégories 1A, 3, 5)",
    icon: FaEnvira,
  },
];

export const administrativeCategories = [
  {
    name: "Comptabilité",
    icon: TbBriefcaseFilled,
  },
  {
    name: "Digital",
    icon: PiMicrosoftWordLogoFill,
  },
  {
    name: "Management",
    icon: MdAccountBalanceWallet,
  },
  {
    name: "Vente et Négotiation",
    icon: AiFillPrinter,
  },
  {
    name: "Bureautique",
    icon: SiPaloaltosoftware,
  },
  {
    name: "Développement personnel",
    icon: TbContract,
  },
  {
    name: "Langues",
    icon: MdElectricBolt,
  },
  {
    name: "PAO/CAO",
    icon: MdElectricBolt,
  },
  {
    name: "Commerce",
    icon: MdElectricBolt,
  },
  {
    name: "Marketing",
    icon: MdElectricBolt,
  },
  {
    name: "Pai et administration des RH",
    icon: MdElectricBolt,
  },
  {
    name: "Secrétariat- Assistanat",
    icon: MdElectricBolt,
  },
];
