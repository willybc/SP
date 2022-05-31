# Completa los metodos debil? y feliz? de Pepita

module Pepita
    @energia = 1000
  
    def self.energia
      @energia 
    end
  
    def self.volar_en_circulos!
      @energia -= 10
    end
    
    def self.comer_alpiste!(gramos)
      @energia += gramos * 15
    end  
  
    def self.debil?
      return self.energia < 100
    end
    
    def self.feliz?
      return self.energia > 1000
    end
  end