Esperantists in Wikidata
=====================

Esperantist in Wikidata by country (data from API)

## Badges
[![GitHub forks](https://img.shields.io/github/forks/JaviRamosLab/Esperantists-in-Wikidata?branch=master&label=Forks&logo=GitHub&logoColor=ffffff&labelColor=282828&color=informational&style=flat)]()
[![GitHub stars](https://img.shields.io/github/stars/JaviRamosLab/Esperantists-in-Wikidata?branch=master&label=Stars&logo=GitHub&logoColor=ffffff&labelColor=282828&color=informational&style=flat)]()
[![GitHub watchers](https://img.shields.io/github/watchers/JaviRamosLab/Esperantists-in-Wikidata?branch=master&label=Watchers&logo=GitHub&logoColor=ffffff&labelColor=282828&color=informational&style=flat)]()
[![Documentation Status](https://readthedocs.org/projects/ansicolortags/badge/?version=latest)](http://ansicolortags.readthedocs.io/?badge=latest)
[![GitHub branches](https://badgen.net/github/branches/JaviRamosLab/Esperantists-in-Wikidata)](https://github.com/JaviRamosLab/Esperantists-in-Wikidata/)
[![GitHub release](https://img.shields.io/github/release/JaviRamosLab/Esperantists-in-Wikidata.svg)](https://GitHub.com/JaviRamosLab/Esperantists-in-Wikidata/releases/)
[![GitHub commits](https://badgen.net/github/commits/JaviRamosLab/Esperantists-in-Wikidata)](https://GitHub.com/JaviRamosLab/Esperantists-in-Wikidata/commit/)
![GitHub pull requests](https://img.shields.io/github/issues-pr/JaviRamosLab/Esperantists-in-Wikidata)
![GitHub milestones](https://img.shields.io/github/milestones/all/JaviRamosLab/Esperantists-in-Wikidata)
![GitHub repo size](https://img.shields.io/github/repo-size/JaviRamosLab/Esperantists-in-Wikidata)

List of Esperantist in Wikidata by country (data from API) SPARQL query

- okupo P106
- esperantisto Q860918
aŭ
- parolas P1412
- Esperanto lingvo Q143
kaj
- ŝtataneco P27
- Kubo Q241 // aŭ alia lando!!!

Filter: lando (Q6256)

### Endpoint
Esperantists (P106 or P1412 and P27)__200 results JSON__

https://query.wikidata.org/sparql?query=SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20WHERE%20%7B%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22eo%2Cen%2Ces%22.%20%7D%0A%20%20%7B%0A%20%20%20%20SELECT%20DISTINCT%20%3Fitem%20WHERE%20%7B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%3Fitem%20p%3AP106%20%3Fstatement0.%0A%20%20%20%20%20%20%20%20%3Fstatement0%20(ps%3AP106%2F(wdt%3AP279*))%20wd%3AQ860918.%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20UNION%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%3Fitem%20p%3AP1412%20%3Fstatement1.%0A%20%20%20%20%20%20%20%20%3Fstatement1%20(ps%3AP1412%2F(wdt%3AP279*))%20wd%3AQ143.%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%3Fitem%20p%3AP27%20%3Fstatement2.%0A%20%20%20%20%20%20%3Fstatement2%20(ps%3AP27%2F(wdt%3AP279*))%20wd%3AQ241.%0A%20%20%20%20%7D%0A%20%20%20%20LIMIT%20200%0A%20%20%7D%0A%7D&format=json

```sparql
SELECT DISTINCT ?item ?itemLabel WHERE {
  SERVICE wikibase:label { bd:serviceParam wikibase:language "eo,en,es". }
  {
    SELECT DISTINCT ?item WHERE {
      {
        ?item p:P106 ?statement0.
        ?statement0 (ps:P106/(wdt:P279*)) wd:Q860918.
      }
      UNION
      {
        ?item p:P1412 ?statement1.
        ?statement1 (ps:P1412/(wdt:P279*)) wd:Q143.
      }
      ?item p:P27 ?statement2.
      ?statement2 (ps:P27/(wdt:P279*)) wd:Q241.
    }
    LIMIT 500
  }
}
```



## Installation

### Demo

## Usage

## Roadmap
If you have ideas for releases in the future, it is a good idea to list them in the README or open new Issue.

## Contributing
open to contributions

## Authors and acknowledgment
### Support me

### Official Site
[Web Site](http://javiramo.github.io/Esperantists-in-Wikidata "Esperantists in Wikidata Site")

## License
[![licensebuttons by-sa](https://licensebuttons.net/l/by-sa/3.0/88x31.png)](https://creativecommons.org/licenses/by-sa/4.0)

Code released under [CC-BY-SA](https://github.com/JaviRamosLab/Esperantists-in-Wikidata/blob/master/LICENSE) License © [Javier Ramos Nistal](https://github.com/JaviRamosLab)

### Show some ❤️ by starring some of the repositories!

### Developed by Javier Ramos [@JaviRamosLab](@JaviRamosLab) from 🇨🇺 Cuba with "❤️ and ⏰"