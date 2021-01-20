
import PropTypes from 'prop-types';
import Composition from './Composition';
import Portion from './Portion';

export default class Food {
  static empty() {
    return new Food({});
  }

  static from(
    id,
    name,
    Energie_kcal,
    Energie_kJ,
    Eau_g,
    Protéines_g,
    Lipides_g,
    Glucides_g,
    Fibres_g,
    Cendres_g,
    Calcium_mg,
    Fer_mg,
    Magnesium_mg,
    Phosphore_mg,
    Potassium_mg,
    Sodium_mg,
    Zinc_mg,
    Cuivre_mg,
    Vitamine_A_microg,
    Retinol_microg,
    betacarotene_microg,
    Vitamine_D_microg,
    Vitamine_E_mg,
    Vitamine_B1_mg,
    Vitamine_B2_mg,
    Vitamine_B3_mg,
    Vitamine_B6_mg,
    Vitamine_B9_microg,
    Vitamine_B12_microg,
    Vitamine_C_mg,
    portions,
  ) {
    return new Food({
      id,
      name,
      Energie_kcal,
      Energie_kJ,
      Eau_g,
      Protéines_g,
      Lipides_g,
      Glucides_g,
      Fibres_g,
      Cendres_g,
      Calcium_mg,
      Fer_mg,
      Magnesium_mg,
      Phosphore_mg,
      Potassium_mg,
      Sodium_mg,
      Zinc_mg,
      Cuivre_mg,
      Vitamine_A_microg,
      Retinol_microg,
      betacarotene_microg,
      Vitamine_D_microg,
      Vitamine_E_mg,
      Vitamine_B1_mg,
      Vitamine_B2_mg,
      Vitamine_B3_mg,
      Vitamine_B6_mg,
      Vitamine_B9_microg,
      Vitamine_B12_microg,
      Vitamine_C_mg,
      portions,
    });
  }

  static fromBlob(blob) {
    return new Food({
      ...blob,
    });
  }

  constructor({
    id = 0,
    name = '',
    Energie_kcal = 0,
    Energie_kJ = 0,
    Eau_g = 0,
    Protéines_g = 0,
    Lipides_g = 0,
    Glucides_g = 0,
    Fibres_g = 0,
    Cendres_g = 0,
    Calcium_mg = 0,
    Fer_mg = 0,
    Magnesium_mg = 0,
    Phosphore_mg = 0,
    Potassium_mg = 0,
    Sodium_mg = 0,
    Zinc_mg = 0,
    Cuivre_mg = 0,
    Vitamine_A_microg = 0,
    Retinol_microg = 0,
    betacarotene_microg = 0,
    Vitamine_D_microg = 0,
    Vitamine_E_mg = 0,
    Vitamine_B1_mg = 0,
    Vitamine_B2_mg = 0,
    Vitamine_B3_mg = 0,
    Vitamine_B6_mg = 0,
    Vitamine_B9_microg = 0,
    Vitamine_B12_microg = 0,
    Vitamine_C_mg = 0,
    portions = [],
  }) {
    this.id = id;
    this.name = name;
    this.composition = Composition.from(
      Energie_kcal,
      Energie_kJ,
      Eau_g,
      Protéines_g,
      Lipides_g,
      Glucides_g,
      Fibres_g,
      Cendres_g,
      Calcium_mg,
      Fer_mg,
      Magnesium_mg,
      Phosphore_mg,
      Potassium_mg,
      Sodium_mg,
      Zinc_mg,
      Cuivre_mg,
      Vitamine_A_microg,
      Retinol_microg,
      betacarotene_microg,
      Vitamine_D_microg,
      Vitamine_E_mg,
      Vitamine_B1_mg,
      Vitamine_B2_mg,
      Vitamine_B3_mg,
      Vitamine_B6_mg,
      Vitamine_B9_microg,
      Vitamine_B12_microg,
      Vitamine_C_mg
    );
    this.portions = portions;
  }

  static get shape() {
    return PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      composition: Composition.shape,
      portions: PropTypes.arrayOf(Portion.shape),
    });
  }
}

/*

portions: "[{"C": "312", "G": "620", "A": "149", "B": "230", "D": "393", "E": "469", "F": "544", "type": "child"}, {"C": "545", "G": "1140", "A": "241", "B": "393", "D": "697", "E": "845", "F": "992", "type": "adult"}]"

[
  {
  position: 1,
  letter: 'A',
  type: 'child',
  weight: 149,
  }
]
*/
