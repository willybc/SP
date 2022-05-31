module CarlosDuty
    @cantidad_logros = 0
    
    def self.dificultad
      30 - @cantidad_logros * 0.5
    end
    
    def self.violento?
      return true
    end
    
    def self.cantidad_logros
      @cantidad_logros
    end
    
    def self.agregar_logros (cant)
      @cantidad_logros += cant
    end
    
    def self.logro_bonus horas
      if horas > 2
        self.agregar_logros(1)
      end
    end
    
    def self.jugar!(un_tiempo)
      self.logro_bonus un_tiempo
    end
    
  end
  
  module TimbaElLeon
    @dificultad = 25
    
    def self.violento?
      return false
    end
    
    def self.dificultad
      @dificultad
    end
    
    def self.calcular_dificultad! un_tiempo
      @dificultad =  self.dificultad + un_tiempo
    end
    
    def self.jugar!(un_tiempo)
      self.calcular_dificultad! un_tiempo
    end
    
  end
  
  module Metroide
    @nivel_espacial = 3
    
    def self.violento?
      @nivel_espacial > 5
    end
    
    def self.dificultad
      100
    end
    
    def self.jugar!(un_tiempo)
      @nivel_espacial += 1
    end
    
  end
  