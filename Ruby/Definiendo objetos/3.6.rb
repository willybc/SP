module Pepita
    @energia = 100
    @ciudad = Iruya
    
    def self.volar_hacia!(destino)
      @ciudad = destino
      @energia -= 100
    end
  
    def self.volar_en_circulos!
        @energia -= 10
    end
  
    def self.comer_lombriz!
      @energia += 20
    end
end