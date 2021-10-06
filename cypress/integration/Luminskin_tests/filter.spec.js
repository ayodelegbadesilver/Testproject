describe('Filtering Test', () => {
	before(function() {
		cy.visit('https://store.luminskin.com/products')
        cy.clearCookies({ log: true})
        cy.clearLocalStorage('my item',{log: true})
	}) 

	it('should select All products from the drop down', () => {
		cy.xpath('//div[3]/div/div/div/div[2]/div/select').select('all-products')
        cy.xpath('//h1').should('be.visible')
        cy.xpath('//h1').contains('All Products')
       
})
    it('should select New products from the drop down', () => {
    cy.xpath('//div[3]/div/div/div/div[2]/div/select').select('new-products')
    cy.xpath('//h1').should('be.visible')
    cy.xpath('//h1').contains('New Products')
})
    it('should select Sets products from the drop down', () => {
    cy.xpath('//div[3]/div/div/div/div[2]/div/select').select('sets')
    cy.xpath('//h1').should('be.visible')
    cy.xpath('//h1').contains('Sets')
})
    it('should select Skincare products from the drop down', () => {
    cy.xpath('//div[3]/div/div/div/div[2]/div/select').select('skincare')
    cy.xpath('//h1').should('be.visible')
    cy.xpath('//h1').contains('Skincare')
})
    it('should select Hair and Body from the drop down', () => {
    cy.xpath('//div[3]/div/div/div/div[2]/div/select').select('hair-and-body')
    cy.xpath('//h1').should('be.visible')
    cy.xpath('//h1').contains('Hair & Body Care')
})
    it('should select Hair and Body from the drop down', () => {
    cy.xpath('//div[3]/div/div/div/div[2]/div/select').select('accessories')
    cy.xpath('//h1').should('be.visible')
    cy.xpath('//h1').contains('Accessories')
})
})