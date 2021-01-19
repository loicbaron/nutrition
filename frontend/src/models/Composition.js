
import PropTypes from 'prop-types';

export default class Composition {
  static from(
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
  ) {
    return new Composition({ 
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
     });
  }

  static fromBlob(blob) {
    return new Composition({
      ...blob,
    });
  }

  constructor({
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
  }) {
    this.Energie_kcal = parseFloat(Energie_kcal);
    this.Energie_kJ = parseFloat(Energie_kJ);
    this.Eau_g = parseFloat(Eau_g);
    this.Protéines_g = parseFloat(Protéines_g);
    this.Lipides_g = parseFloat(Lipides_g);
    this.Glucides_g = parseFloat(Glucides_g);
    this.Fibres_g = parseFloat(Fibres_g);
    this.Cendres_g = parseFloat(Cendres_g);
    this.Calcium_mg = parseFloat(Calcium_mg);
    this.Fer_mg = parseFloat(Fer_mg);
    this.Magnesium_mg = parseFloat(Magnesium_mg);
    this.Phosphore_mg = parseFloat(Phosphore_mg);
    this.Potassium_mg = parseFloat(Potassium_mg);
    this.Sodium_mg = parseFloat(Sodium_mg);
    this.Zinc_mg = parseFloat(Zinc_mg);
    this.Cuivre_mg = parseFloat(Cuivre_mg);
    this.Vitamine_A_microg = parseFloat(Vitamine_A_microg);
    this.Retinol_microg = parseFloat(Retinol_microg);
    this.betacarotene_microg = parseFloat(betacarotene_microg);
    this.Vitamine_D_microg = parseFloat(Vitamine_D_microg);
    this.Vitamine_E_mg = parseFloat(Vitamine_E_mg);
    this.Vitamine_B1_mg = parseFloat(Vitamine_B1_mg);
    this.Vitamine_B2_mg = parseFloat(Vitamine_B2_mg);
    this.Vitamine_B3_mg = parseFloat(Vitamine_B3_mg);
    this.Vitamine_B6_mg = parseFloat(Vitamine_B6_mg);
    this.Vitamine_B9_microg = parseFloat(Vitamine_B9_microg);
    this.Vitamine_B12_microg = parseFloat(Vitamine_B12_microg);
    this.Vitamine_C_mg = parseFloat(Vitamine_C_mg);
  }

  static get shape() {
    return PropTypes.shape({
      Energie_kcal: PropTypes.number,
      Energie_kJ: PropTypes.number,
      Eau_g: PropTypes.number,
      Protéines_g: PropTypes.number,
      Lipides_g: PropTypes.number,
      Glucides_g: PropTypes.number,
      Fibres_g: PropTypes.number,
      Cendres_g: PropTypes.number,
      Calcium_mg: PropTypes.number,
      Fer_mg: PropTypes.number,
      Magnesium_mg: PropTypes.number,
      Phosphore_mg: PropTypes.number,
      Potassium_mg: PropTypes.number,
      Sodium_mg: PropTypes.number,
      Zinc_mg: PropTypes.number,
      Cuivre_mg: PropTypes.number,
      Vitamine_A_microg: PropTypes.number,
      Retinol_microg: PropTypes.number,
      betacarotene_microg: PropTypes.number,
      Vitamine_D_microg: PropTypes.number,
      Vitamine_E_mg: PropTypes.number,
      Vitamine_B1_mg: PropTypes.number,
      Vitamine_B2_mg: PropTypes.number,
      Vitamine_B3_mg: PropTypes.number,
      Vitamine_B6_mg: PropTypes.number,
      Vitamine_B9_microg: PropTypes.number,
      Vitamine_B12_microg: PropTypes.number,
      Vitamine_C_mg: PropTypes.number,
    });
  }
}
