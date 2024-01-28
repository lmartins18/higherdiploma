# It was not part of the requirement to use if/else statements, therefore I will use a switch.
puts "Welcome to the Fitness Class Ticket Price App"
puts "Please enter the day of the week i.e Monday"

day = gets.chomp.downcase

case day
  when "monday", "tuesday", "wednesday", "thursday"
    puts "The ticket is 10€"
  when "friday", "saturday", "sunday"
    puts "The ticket is 20€"
  else
    puts day
    puts "Invalid day."
end
# References:
# https://www.educative.io/answers/how-to-convert-a-string-to-lowercase-in-ruby?utm_campaign=interview_prep&utm_source=google&utm_medium=ppc&utm_content=pmax&utm_term=&eid=5082902844932096&utm_term=&utm_campaign=%5BNew-Oct+23%5D+Performance+Max+-+Coding+Interview+Patterns&utm_source=adwords&utm_medium=ppc&hsa_acc=5451446008&hsa_cam=20684486602&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQiAh8OtBhCQARIsAIkWb6_bIk1qnSejWllfFb0hj62DmUOVRpvMW_X8Q2ELinbxsVTHwRoi0P8aAiTaEALw_wcB
# https://www.educative.io/answers/how-to-write-a-switch-statement-in-ruby?utm_campaign=interview_prep&utm_source=google&utm_medium=ppc&utm_content=pmax&utm_term=&eid=5082902844932096&utm_term=&utm_campaign=%5BNew-Oct+23%5D+Performance+Max+-+Coding+Interview+Patterns&utm_source=adwords&utm_medium=ppc&hsa_acc=5451446008&hsa_cam=20684486602&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQiAh8OtBhCQARIsAIkWb6_LglA3vM_TYF1lO5ELs3Qjr4_MZw4omAPq4rJ_enV6B-FtC0g_JMUaAkBsEALw_wcB
# https://medium.com/the-yorkshire-coder/banking-with-ruby-introduction-to-methods-part-1-8210b2879027
