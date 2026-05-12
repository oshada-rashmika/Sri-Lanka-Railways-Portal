describe('Security Headers', () => {
  it('should have strict security headers present', () => {
    cy.request('/').then((response) => {
      // Assert Content Security Policy
      expect(response.headers).to.have.property('content-security-policy');
      const csp = response.headers['content-security-policy'] as string;
      expect(csp).to.include("default-src 'self'");
      expect(csp).to.include("frame-ancestors 'none'");

      // Assert X-Frame-Options
      expect(response.headers).to.have.property('x-frame-options');
      expect(response.headers['x-frame-options']).to.equal('DENY');

      // Assert X-Content-Type-Options
      expect(response.headers).to.have.property('x-content-type-options');
      expect(response.headers['x-content-type-options']).to.equal('nosniff');
      
      // Additional security headers we configured
      expect(response.headers).to.have.property('referrer-policy');
      expect(response.headers['referrer-policy']).to.equal('strict-origin-when-cross-origin');
      
      expect(response.headers).to.have.property('strict-transport-security');
    });
  });
});