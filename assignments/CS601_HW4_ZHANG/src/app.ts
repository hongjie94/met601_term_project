interface ICountry {
  name: string;
  getInfo(element: HTMLElement): HTMLElement;
}

class RainyCountry implements ICountry {
  constructor(public name: string, public rainLevel: number) {}

  getInfo(element: HTMLElement): HTMLElement {
    element.textContent = `${this.name} has a rain level of ${this.rainLevel} inches.`;
    element.classList.add('country-item', 'rainy');
    return element;
  }
}

class SnowyCountry implements ICountry {
  constructor(public name: string, public snowLevel: number) {}

  getInfo(element: HTMLElement): HTMLElement {
    element.textContent = `${this.name} has a snow level of ${this.snowLevel} inches.`;
    element.classList.add('country-item', 'snowy');
    return element;
  }
}

class IslandCountry implements ICountry {
  constructor(public name: string, public landSize: number) {}

  getInfo(element: HTMLElement): HTMLElement {
    element.textContent = `${this.name} has a land size of ${this.landSize} square miles.`;
    element.classList.add('country-item', 'island');
    return element;
  }
}

class CountryManager {
  private countries: ICountry[];
  private snowyCountriesList: SnowyCountry[] = [];

  constructor(countries: ICountry[]) {
    this.countries = countries;
    this.snowyCountriesList = [];  
    this.buildSnowyCountriesList(); 
  }

  // Filter snowy countries
  private checkSnowLevel(country: ICountry): ICountry | null {
    if ('snowLevel' in country) {
      return country;
    }
    return null;
  }

  // Build list of snowy countries
  private buildSnowyCountriesList(): void {
    this.countries.forEach(country => {
      const checkedCountry = this.checkSnowLevel(country);
      if (checkedCountry && checkedCountry instanceof SnowyCountry) {
        this.snowyCountriesList.push(checkedCountry);
      }
    });
  }

 // Calculate total snow level of snowy countries
  private calculateTotalSnow(): number {
    return this.snowyCountriesList.reduce((sum, country) => 
      sum + country.snowLevel, 0
    );
  }

  // Display countries and total snow level
  displayCountries(allCountriesDiv: HTMLElement, snowyCountriesDiv: HTMLElement): void {
    // Display all countries
    this.countries.forEach(country => {
      const div = document.createElement('div');
      country.getInfo(div);
      allCountriesDiv.appendChild(div);
    });

    // Display snowy countries
    this.snowyCountriesList.forEach(country => {
      const div = document.createElement('div');
      country.getInfo(div);
      snowyCountriesDiv.appendChild(div);
    });

    // Display total snow
    const totalDiv = document.createElement('div');
    totalDiv.textContent = `Total annual snow level: ${this.calculateTotalSnow()} inches`;
    totalDiv.classList.add('total-snow');
    snowyCountriesDiv.appendChild(totalDiv);
  }
}

// Initialize data and manager
const countries: ICountry[] = [
  new RainyCountry("United States", 28),
  new SnowyCountry("Norway", 20),
  new RainyCountry("Brazil", 40),
  new IslandCountry("Japan", 145937),
  new SnowyCountry("Sweden", 30),
  new IslandCountry("Australia", 2968464)
];

// DOM initialization
document.addEventListener('DOMContentLoaded', () => {
  const allCountriesDiv = document.getElementById('allCountries');
  const snowyCountriesDiv = document.getElementById('snowyCountries');
  
  if (allCountriesDiv && snowyCountriesDiv) {
    const manager = new CountryManager(countries);
    manager.displayCountries(allCountriesDiv, snowyCountriesDiv);
  }
});