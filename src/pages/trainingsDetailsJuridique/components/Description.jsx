import React from "react";

const Description = () => {
  return (
    <div id="description" className="flex flex-col gap-6 scroll-mt-52">
      <p className="text-2xl font-medium text-gray-600 max-w-2xl">
        Ce que vous allez apprendre dans cette formation Diagnostic
        dermatologique
      </p>
      <div className="max-w-4xl">
        <p className="sm:text-base text-sm">
          La formation Diagnostic dermatologique commence par détailler les
          différents types de lésions que vous pouvez rencontrer en tant que
          médecin généraliste en les classant selon des critères d'altération,
          d'extension et de pigmentation. Vos cours identifient ensuite les
          diagnostics en fonction de la topographie de la pathologie. Vous
          connaîtrez aussi les dermatoses les plus courantes chez les enfants
          ainsi que chez les personnes âgées. La formation développe également
          le protocole de dépistage, de diagnostic et de prise en charge des
          tumeurs. Enfin, vous saurez reconnaître les signes d'une maladie rare
          ou d'une urgence dermatologique.
        </p>
      </div>
    </div>
  );
};

export default Description;
