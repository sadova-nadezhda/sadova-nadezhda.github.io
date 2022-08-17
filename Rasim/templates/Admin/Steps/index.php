<section class="content-header">
  <div class="container-fluid">
    <div class="row mb-2">
      <div class="col-sm-6">
        <h1>Шаги</h1>
      </div>
      <div class="col-sm-6"></div>
    </div>
  </div><!-- /.container-fluid -->
</section>

<!-- Main content -->
<section class="content">

  <!-- Default box -->
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Шаги</h3>
      <div class="card-tools">
        <a href="/admin/steps/add" class="btn btn-success">Добавить новый материал</a>
      </div>
		
    </div>
    <div class="card-body p-0">
    <?php if(!empty($data)): ?>
      <table class="table table-striped projects">
        <thead>
            <tr>
                <th style="width: 1%">ID</th>
                <th style="width: 12%">Название</th>
                <th style="width: 8%">Приоритет</th>
                <th style="width: 8%; text-align: right;">Редактирование</th>
            </tr>
        </thead>
        <tbody>
         	<?php foreach($data as $item): ?>
        		<tr>
        			<td>
        				<?=$item['id']?>
        			</td>
        			<td>
        				<?=$item['title']?>
        			</td>
              <td>
                <?=$item['item_order']?>
              </td>
        			<td class="project-actions text-right">
        				<a class="btn btn-info btn-sm" href="/admin/steps/edit/<?=$item['id']?>">
        					<i class="fas fa-pencil-alt"></i>Редактировать
        				</a>
        				<?= $this->Form->postLink('Удалить', "/admin/steps/delete/{$item['id']}", array('confirm' => 'Удалить Материал?', 'value'=>'465', 'class' => 'btn btn-danger btn-sm')) ?>
        			</td>
        		</tr>
        	<?php endforeach ?>
        </tbody>
      </table>
    <?php else: ?>
      <div class="emty_data">
        К сожалению в данном разделе еще не добавлена информация...
      </div> 
    <?php endif ?>
    </div>
    <!-- /.card-body -->
  </div>
  <!-- /.card -->

</section>

<ul class="pagination">
  <?php 

    $this->Paginator->options([
        'url' => [
            'lang' => $l,
        
        ]
    ]);
    echo $this->Paginator->numbers([
      'first' => 1, 'last' => 1, 'modulus' => 2, 
    ]); 
  ?>
</ul>