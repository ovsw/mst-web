/** @jsx jsx */
import {jsx, Container} from 'theme-ui'
import React from 'react' // eslint-disable-line

import Controls from './controls/'
import PerformancesContainer from './performances-container'

class Wizard extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      userInputContainerClicked: false,
      // each filter name corresponds with a performance attribute from performances
      // all filters are initially turned off  / inactive / false,
      passingTags: {
        performanceType: {
          interactive: {
            title: 'Interactive Performances',
            isActive: false
          },
          game: {
            title: 'Game Shows',
            isActive: false
          },
          mystery: {
            title: 'Mystery Shows',
            isActive: false
          },
          custom: {
            title: 'Custom Experiences',
            isActive: false
          },
          judaism: {
            title: 'Perform Judaism',
            isActive: false
          }
        },
        ageRange: {
          prek: {
            title: 'Pre-K',
            isActive: false
          },
          k2: {
            title: 'Grades K-2',
            isActive: false
          },
          g36: {
            title: 'Grades 3-6',
            isActive: false
          },
          g7plus: {
            title: 'Grades 7+',
            isActive: false
          },
          mixed: {
            title: 'A bit of Everything',
            isActive: false
          },
          adults: {
            title: 'Adults',
            isActive: false
          }
        },
        noOfParticipants: {
          o001030: {
            title: '1-30',
            isActive: false
          },
          o030075: {
            title: '30-75',
            isActive: false
          },
          o075150: {
            title: '75-150',
            isActive: false
          },
          o150250: {
            title: '150-250',
            isActive: false
          },
          o250500: {
            title: '250+',
            isActive: false
          }
        },
        themes: {
          'anti-bullying': {
            title: 'Anti-Bullying',
            isActive: false
          },
          'arts-culture': {
            title: 'Arts & Culture',
            isActive: false
          },
          'black-history-month': {
            title: 'Black History Month',
            isActive: false
          },
          charity: {
            title: 'Charity',
            isActive: false
          },
          'color-war': {
            title: 'Color War',
            isActive: false
          },
          diversity: {
            title: 'Diversity',
            isActive: false
          },
          'dual-language': {
            title: 'Dual Language',
            isActive: false
          },
          environmental: {
            title: 'Environmental Awareness',
            isActive: false
          },
          gratitude: {
            title: 'Gratitude',
            isActive: false
          },
          'hispanic-heritage': {
            title: 'Hispanic Heritage',
            isActive: false
          },
          independence: {
            title: 'Independence',
            isActive: false
          },
          literacy: {
            title: 'Literacy',
            isActive: false
          },
          'magical-elements': {
            title: 'Magical Elements',
            isActive: false
          },
          mystery: {
            title: 'Mystery',
            isActive: false
          },
          puppets: {
            title: 'Puppets',
            isActive: false
          },
          resilience: {
            title: 'Resilience',
            isActive: false
          },
          respect: {
            title: 'Respect for All',
            isActive: false
          },
          'staff-appreciation': {
            title: 'Staff Appreciation',
            isActive: false
          },
          stem: {
            title: 'STEM',
            isActive: false
          },
          camp: {
            title: 'Summer Camp',
            isActive: false
          },
          women: {
            title: 'Women\'s Empowerment',
            isActive: false
          }
        },
        holidays: {
          none: {
            title: 'None',
            isActive: false
          },
          'black-history-month': {
            title: 'Black History Month',
            isActive: false
          },
          chanukah: {
            title: 'Chanukah',
            isActive: false
          },
          christmas: {
            title: 'Christmas',
            isActive: false
          },
          halloween: {
            title: 'Halloween',
            isActive: false
          },
          'high-holidays': {
            title: 'High Holidays',
            isActive: false
          },
          passover: {
            title: 'Passover',
            isActive: false
          },
          'presidents-Day': {
            title: 'President\'s Day',
            isActive: false
          },
          purim: {
            title: 'Purim',
            isActive: false
          }
        }
      }
    }

    this.allFilterClickListener = this.allFilterClickListener.bind(this)
  }

  // **************** UNIVERSAL Filter ****************
  allFilterClickListener (e, filterProp) {
    const name = e.target.dataset.name
    console.log('FILTER clicked', name)
    this.setState(prevState => ({
      userInputContainerClicked: true,
      passingTags: {
        ...prevState.passingTags,
        [filterProp]: {
          ...prevState.passingTags[filterProp],
          [name]: {
            ...prevState.passingTags[filterProp][name],
            isActive: !prevState.passingTags[filterProp][name].isActive
          }

        }
      }
    }))
  };

  // get all the active flters based on what the user clicked on 
  activeFilters () {
    const collectedTrueKeys = {
      performanceType: [],
      ageRange: [],
      noOfParticipants: [],
      themes: [],
      holidays: []
    }

    // loop through all tag groups we want to collect active tags for
    Object.keys(collectedTrueKeys).map(key => { // eg key = performanceType
      // then loop through all their tags
      for (const keyy in this.state.passingTags[key]) { // eg keyy = interactive
        // if the tag is active
        if (this.state.passingTags[key][keyy].isActive) {
          // place it into the collectedTrueKeys object, in its tag group array
          collectedTrueKeys[key].push(keyy) // eg collectedTrueKeys[performanceType].push(interactive)
        }
      }
    })
    console.log('collected active filters h:', collectedTrueKeys.hollidays)
    return collectedTrueKeys
  }

  filterPerformancesByCriteria (allPperformances, activeFilters) {
    // grab all the criteria we are filtering by fom the active tags
    const allFilterCriteria = Object.keys(activeFilters) // = [performanceType, ageRange, noOfParticipants, themes, hollidays]
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx \n allFilterCriteria', allFilterCriteria)
    // we'll be returning a filtered down array of performances to list
    return allPperformances.filter(currentPerformance => { // for each performance...
      console.log(`********************BEGIN CHECKING ${currentPerformance.title}********************`)
      return allFilterCriteria.every( // ... we'll test if all the active filter criteria is found it that performance's attributes
        
        filterCriterion => { // eg = performanceType - check each filter group/
          console.log(`\n \t\t for ${currentPerformance.title} -  ${filterCriterion} user selectged: ${activeFilters[filterCriterion].length == 0 ? "❌NOTHING" : activeFilters[filterCriterion]} 
            \n filtervalues: ${activeFilters[filterCriterion]} |
            \n performance values: ${currentPerformance[filterCriterion]} b
            \n peroformance Object: ${Object.keys(currentPerformance)}
            `)
          // check if we have any buttons pressed for the current filter group, if not, move on to next group
          if (!activeFilters[filterCriterion].length) return true // eg activeFilters[performanceType] == [] - we have no active tags for this filer gorup = AUTOMATIC PASS the check (which means show the performance, according to this criterion, since the user ignored it)

          // now that we KNOW we have some active tags in this group
          // if currentPerformance[filterCriterion] is an array - meaning multi-option attributes for performances - which it always is in this particular project...
          if (Array.isArray(currentPerformance[filterCriterion])) { // currentPerformance.performanceType = ['interactive', 'game']
            // Loop therough all values of the performance's attribute (which has the same name as the filter group we are checking)...
            // ... and check if at least one of the set values for that performance's attribute is the current active filter's value
            console.log(` \n bbb this performance ${currentPerformance.title} has the ${filterCriterion} set to:  ${currentPerformance[filterCriterion]}
               \n and the user is looking for ${activeFilters[filterCriterion]}
               \n therefore,
              `), 
              console.log("____________________________________")
            return currentPerformance[filterCriterion] // e.g. performance.performanceType
              .some(attributeValue => // e.g. 'interactive'
              // check if the performance attribute value (eg. 'interactive') is one that we're looking for  (is in activeFilters.performanceType)
                activeFilters[filterCriterion].includes(attributeValue) // activeFilters.performanceType.includes(interactive) next: activeFilters.performanceType.includes(game).. etc
              )
          }
          
          // if the performance's attribute is NOT an array (phat chance with performances use case)
          // console.log('OH OHHHHHHHHHHHH currently ', activeFilters[filterCriterion], ' - ', performance)
          return activeFilters[filterCriterion].includes(performance[filterCriterion]) // will pass if the performance attribute's value is found in teh active filter
        })
    })
  }

  getFilteredPerformances () {
    const filteredPerformances = this.filterPerformancesByCriteria(
      this.props.performances,
      this.activeFilters()
    )
    return filteredPerformances
  };

  render () {
    const {performances} = this.props
    const {passingTags, userInputContainerClicked} = this.state

    return (
      <Container>

        {/* // pass the  */}
        <Controls passingTags={passingTags} allFilterClickListener={this.allFilterClickListener} />

        <PerformancesContainer performances={this.getFilteredPerformances()} totalNoOfPerformances={performances.length} userInputContainerClicked={userInputContainerClicked} />

      </Container>
    )
  }
}

export default Wizard
