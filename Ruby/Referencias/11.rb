module Jor  
    def self.plato_del_dia=(plato)
      @plato_del_dia = plato 
    end
    
    def self.plato_del_dia
      @plato_del_dia 
    end
  
    def self.picantear!
      self.plato_del_dia.agregar_ajies! 5
    end
    
  end
  
  module Fideos
    @ajies = 0
    
    def self.ajies
      @ajies
    end
    
    def self.picantes?
      @ajies > 2
    end
    
    def self.agregar_ajies! valor
      @ajies += valor
    end
    
    def self.quitar_ajies! valor
      @ajies -= valor
    end
    
    def self.descartar_la_salsa!
      @ajies = 0
    end
    
  end
  
  module Luchi
    def self.suavizar! (fideos,cant)
      if fideos.ajies > 10
        fideos.descartar_la_salsa!
      else
        fideos.quitar_ajies! cant
      end
    end
  end