import React from "react";
import { Route, Routes } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";


const Home = React.lazy(() => import("./pages/home"));
const AllTrainings = React.lazy(() => import("./pages/home/AllTrainings"));
const Trainings = React.lazy(() => import("./pages/trainings"));
const Trainings2 = React.lazy(() => import("./pages/trainingsJuridique"));
const Trainings3 = React.lazy(() => import("./pages/trainingsBtp"));
const SearchTrainings = React.lazy(() => import("./pages/searchTrainings"));
const TrainingDetails = React.lazy(() => import("./pages/trainingDetails"));
const TrainingBtpDetails = React.lazy(() => import("./pages/trainingBtpDetails"));
const Contact = React.lazy(() => import("./pages/contact"));
const About = React.lazy(() => import("./pages/about"));
const Cpf = React.lazy(() => import("./pages/Financements/Cpf"));
const Opco = React.lazy(() => import("./pages/Financements/Opco"));
const Faf = React.lazy(() => import("./pages/Financements/Faf"));
const Agefiph = React.lazy(() => import("./pages/Financements/Agefiph"));
const PoleEmploi = React.lazy(() => import("./pages/Financements/PoleEmploi"));
const LegalNotices = React.lazy(() => import("./pages/legalNotices"));
const PrivacyPolicy = React.lazy(() => import("./pages/privacyPolicy"));
const TermsOfUse = React.lazy(() => import("./pages/termsAndConditionsOfUse"));
const ComptabiltéDetails= React.lazy(() => import("./pages/trainingsDetailsJuridique/ComptabilitéDetails"));
const DigitalDetails= React.lazy(() => import("./pages/trainingsDetailsJuridique/DigitalDetails"));
const ManagementDetails= React.lazy(() => import("./pages/trainingsDetailsJuridique/ManagementDetails"));
const VenteDetails= React.lazy(() => import("./pages/trainingsDetailsJuridique/VenteDetails"));
const BureautiqueDetails= React.lazy(() => import("./pages/trainingsDetailsJuridique/BureautiqueDetails"));
const DeveloppementDetails= React.lazy(() => import("./pages/trainingsDetailsJuridique/DeveloppementDetails"));
const LangueDetails= React.lazy(() => import("./pages/trainingsDetailsJuridique/LangueDetails"));
const PaocaoDetails= React.lazy(() => import("./pages/trainingsDetailsJuridique/PaocaoDetails"));
const CommerceDetails= React.lazy(() => import("./pages/trainingsDetailsJuridique/CommerceDetails"));
const MarketingDetails= React.lazy(() => import("./pages/trainingsDetailsJuridique/MarketingDetails"));
const PaieDetails = React.lazy(() => import("./pages/trainingsDetailsJuridique/PaieDetails"));
const SecretariatDetails = React.lazy(() => import("./pages/trainingsDetailsJuridique/SecretariatDetails"));

const CandidateDashboard = React.lazy(() =>
  import("./pages/candidateDashboard")
);
const Authentication = React.lazy(() => import("./pages/authentication"));
const Login = React.lazy(() =>
  import("./pages/authentication/components/Login")
);
const Register = React.lazy(() =>
  import("./pages/authentication/components/Register")
);
const ForgotPassword = React.lazy(() =>
  import("./pages/authentication/components/ForgotPassword")
);

// Composants pour les catégories de formations
const formationRoutes = [
  { path: "comptabilité", component: React.lazy(() => import("./pages/trainingsJuridique/components/ListComptabilite")) },
  { path: "digital", component: React.lazy(() => import("./pages/trainingsJuridique/components/ListDigital")) },
  { path: "management", component: React.lazy(() => import("./pages/trainingsJuridique/components/ListManagement")) },
  { path: "vente-et-négotiation", component: React.lazy(() => import("./pages/trainingsJuridique/components/ListVente")) },
  { path: "bureautique", component: React.lazy(() => import("./pages/trainingsJuridique/components/ListBureautique")) },
  { path: "développement-personnel", component: React.lazy(() => import("./pages/trainingsJuridique/components/ListDeveloppement")) },
  { path: "langues", component: React.lazy(() => import("./pages/trainingsJuridique/components/ListLangue")) },
  { path: "pao/cao", component: React.lazy(() => import("./pages/trainingsJuridique/components/ListPaocao")) },
  { path: "commerce", component: React.lazy(() => import("./pages/trainingsJuridique/components/ListCommerce")) },
  { path: "marketing", component: React.lazy(() => import("./pages/trainingsJuridique/components/ListMarketing")) },
  { path: "pai-et-administration-des-rh", component: React.lazy(() => import("./pages/trainingsJuridique/components/ListPaie")) },
  { path: "secrétariat--assistanat", component: React.lazy(() => import("./pages/trainingsJuridique/components/ListSecretariat")) },

];

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <Home />
          </React.Suspense>
        }
      />
      <Route
          path="/AllTrainings"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <AllTrainings />
          </React.Suspense>
        }
      />
      <Route
        path="/formations/categorie/sante"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <Trainings />
          </React.Suspense>
        }
      />
       <Route
        path="/cpf"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <Cpf/>
          </React.Suspense>
        }
      />
        <Route
        path="/opco"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <Opco/>
          </React.Suspense>
        }
      />
      <Route
        path="/faf"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <Faf/>
          </React.Suspense>
        }
      />
      <Route
        path="/poleEmploi"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <PoleEmploi/>
          </React.Suspense>
        }
      />
       <Route
        path="/agefiph"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <Agefiph/>
          </React.Suspense>
        }
      />
       <Route
        path="/formations/categorie/btp"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <Trainings3 />
          </React.Suspense>
        }
      />
      <Route
        path="/formations/juridique/:categorie"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <Trainings2 />
          </React.Suspense>
        }
      />
      <Route
        path="/formations/recherches"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <SearchTrainings />
          </React.Suspense>
        }
      />
      {/* Génération dynamique des routes pour /formation */}
      {formationRoutes.map(({ path, component: Component }) => (
        <Route
          key={path}
          path={`/formation/${path}`}
          element={
            <React.Suspense fallback={<LoadingSpinner />}>
              <Component />
            </React.Suspense>
          }
        />
      ))}
      <Route
        path="/formations/:id"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <TrainingDetails/>
          </React.Suspense>
        }
      />
       <Route
        path="/formations/btp/:id"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <TrainingBtpDetails/>
          </React.Suspense>
        }
      />
      <Route
        path="/contact"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </React.Suspense>
        }
      />
      <Route
        path="/a-propos"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <About />
          </React.Suspense>
        }
      />
      <Route
        path="/mentions-legales"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <LegalNotices />
          </React.Suspense>
        }
      />
      <Route
        path="/politiques-de-confidentialite"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <PrivacyPolicy />
          </React.Suspense>
        }
      />
      <Route
        path="/conditions-generales"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <TermsOfUse />
          </React.Suspense>
        }
      />

       <Route
        path="/formation/comptabilité/:id"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <ComptabiltéDetails/>
          </React.Suspense>
        }
      />
        <Route
        path="/formation/digital/:id"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <DigitalDetails/>
          </React.Suspense>
        }
      />
       <Route
        path="/formation/management/:id"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <ManagementDetails/>
          </React.Suspense>
        }
      />
       <Route
        path="/formation/vente/:id"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <VenteDetails/>
          </React.Suspense>
        }
      />
       <Route
        path="/formation/bureautique/:id"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <BureautiqueDetails/>
          </React.Suspense>
        }
      />
        <Route
        path="/formation/developpement/:id"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <DeveloppementDetails/>
          </React.Suspense>
        }
      />
         <Route
        path="/formation/langue/:id"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <LangueDetails/>
          </React.Suspense>
        }
      />
        <Route
        path="/formation/commerce/:id"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <CommerceDetails/>
          </React.Suspense>
        }
      />

<Route
        path="/formation/pao/cao/:id"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <PaocaoDetails/>
          </React.Suspense>
        }
      />
      <Route
        path="/formation/marketing/:id"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <MarketingDetails/>
          </React.Suspense>
        }
      />
            <Route
        path="/formation/paie/:id"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <PaieDetails/>
          </React.Suspense>
        }
      />
           <Route
        path="/formation/secretariat/:id"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <SecretariatDetails/>
          </React.Suspense>
        }
      />
      <Route
        path="/compte/profil"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <CandidateDashboard />
          </React.Suspense>
        }
      >
        <Route index element={<React.Suspense fallback={<LoadingSpinner />}>
          <CandidateDashboard />
        </React.Suspense>} />
      </Route>
      <Route path="/connexion" element={<Authentication />}>
        <Route index element={<Login />} />
        <Route path="inscrire" element={<Register />} />
        <Route path="mot-de-passe-oublie" element={<ForgotPassword />} />
       
      </Route>
    </Routes>
  );
};

export default AppRoutes;
