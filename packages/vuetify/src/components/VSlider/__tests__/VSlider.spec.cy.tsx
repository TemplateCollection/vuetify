/// <reference types="../../../../types/cypress" />

import { CenteredGrid } from '@/../cypress/templates'

import { VSlider } from '../VSlider'

describe('VSlider', () => {
  it('should support color prop', () => {
    cy.mount(() => (
      <CenteredGrid>
        <VSlider color="primary" model-value={50} />
      </CenteredGrid>
    ))
  })

  it('should support vertical direction', () => {
    cy.mount(() => (
      <CenteredGrid class="justify-center">
        <VSlider direction="vertical" model-value={50} />
      </CenteredGrid>
    ))
  })
})
