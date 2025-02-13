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
} from "react-icons/tb";
import { PiLadderSimpleLight, PiMicrosoftWordLogoFill } from "react-icons/pi";
import { LuCable } from "react-icons/lu";
import { SiPaloaltosoftware } from "react-icons/si";
import { AiFillPrinter } from "react-icons/ai";

export const medicalCategories = [
  {  id : 0,
    name: "Vaccination par l’Infirmier",
    icon: MdLocalPharmacy,
  },
  {
    id : 1,
    name: "Gestion de Cabinet Infirmier",
    icon: FaBaby,
  },
  {
    id : 2,
    name: "Prélèvements Sanguins",
    icon: GiFootprint,
  },

  {
    id : 3,
    name: " Perfusions et Soins Complexes ",
    icon: FaHeartPulse,
  },

  {
    id : 4,
    name: " Gestion des Soins Palliatifs",
    icon: MdPregnantWoman,
  },
  {
    id : 5,
    name: " Burn-Out des Soignants",
    icon: GiMagnifyingGlass,
  },
  {
    id : 6,
    name: " Diabète - Prise en charge globale",
    icon: TbOld,
  },
  {
    id : 7,
    name: " Responsabilité Professionnelle",
    icon: RiPsychotherapyLine,
  },
  {
    id : 8,
    name: " Prévention et Prise en Charge de l'Obésité",
    icon: TbMassage,
  },
  {
    id : 9,
    name: " Cancérologie - Soins et Accompagnement",
    icon: FaUserNurse,
  },
  { id : 10,
    name: " Maladie de Parkinson - Prise en ChargeGlobale",
    icon: FaHandHoldingMedical,
  },
  { id : 11,
    name: "Plaies et Cicatrisation",
    icon: LiaStethoscopeSolid,
  },
  { id : 12,
    name: " Kinésithérapie - Approches Innovantes en Rééducation ",
    icon: TbDentalBroken,
  },
  {   id : 13,
    name: " Chirurgie Dentaire - Gestion des Pathologies Complexes",
    icon: MdOutlineBabyChangingStation,
  },
  { id : 14,
    name: " Pharmaciens - Optimisation des Conseils au Comptoir",
    icon: GiDiscussion,
  },

  { id : 15,
    name: " Médecins Généralistes - Approches Multidisciplinaires",
    icon: GiMedicinePills,
  },
  { id : 16,
    name: "Sages-Femmes - Suivi Périnatal et Innovations en Santé Maternelle",
    icon: GiBrain,
  },
  { id : 17,
    name: "Aides-Soignantes - Soins et Relation Patient",
    icon: GiJoint,
  },
  { id : 18,
    name: " Gynécologie - Prise en Charge et Innovations",
    icon: GiHospital,
  },
  { id : 19,
    name: " Préparateurs en Pharmacie - Gestion et Conseil au Comptoir",
    icon: GiHospital,
  },

  { id : 20,
    name: " Dermatologie - Diagnostic et Traitements Modernes",
    icon: GiHospital,
  },

  { id : 21,
    name: " Psychiatrie - Approches Thérapeutiques Modernes",
    icon: GiHospital,
  },

  { id : 22,
    name: " Pédiatrie - Soins et Pathologies Spécifiques",
    icon: GiHospital,
  },

  { id : 22,
    name: " Neurologie - Diagnostic et Prise en Charge",
    icon: GiHospital,
  },

  { id : 23,
    name: " Allaitement Maternel - Accompagnement et Soutien",
    icon: GiHospital,
  },

  
  { id : 24,
    name: " Rééducation du Périnée",
    icon: GiHospital,
  },

  { id : 25,
    name: " Infertilité - Diagnostic et Parcours de Soins",
    icon: GiHospital,
  },

  { id : 26,
    name: " Suivi du Nouveau-né",
    icon: GiHospital,
  },
  { id : 27,
    name: " Suivi du Nouveau-né",
    icon: GiHospital,
  },
  { id : 28,
    name: " Vaccination par le Pharmacien",
    icon: GiHospital,
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
